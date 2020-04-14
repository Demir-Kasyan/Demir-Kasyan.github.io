import {
	Euler,
	MathUtils,
	Quaternion,
	Vector3
} from "../three.addons/three.module.js";

var MainControl = function ( object ) {

	var scope = this;

	var old = new Vector3(), velocity = new Vector3(), vec = new Vector3();

	var prevTime = performance.now();

	this.object = object;
	this.object.rotation.reorder( 'YXZ' );

	this.enabled = true;

    this.deviceOrientation = {};
    this.deviceMotion = {};
	this.screenOrientation = 0;

	this.alphaOffset = 0;

    var onDeviceMotionChangeEvent = function ( event ) {

        scope.deviceMotion = event;

    };

	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;
		console.log("its work&coffeandsuckmilk")
	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};
	
	var setObjectPosition = function ( direction ) {

			var time = performance.now();

			var delta = ( time - prevTime ) / 1000;

			velocity.x -= velocity.x * 10 * delta;

			velocity.y -= velocity.y * 10 * delta;

			velocity.z -= velocity.z * 10 * delta;

			if( direction.x != 0 )	velocity.x -=  direction.x * 500 * delta;

			if( direction.y != 0 )	velocity.y -=  direction.y * 500 * delta;

			if( direction.z != 0 )	velocity.z -=  direction.z * 500 * delta;
			
			scope.move( - velocity.x * delta );
			
			scope.move( - velocity.z * delta );
			
			scope.move( - velocity.y * delta );

			prevTime = time;
		
	};
	
	this.move = function ( distance ) {


		vec.setFromMatrixColumn( object.matrix, 0 );

		object.position.addScaledVector( vec, distance );

	};


	var setObjectQuaternion = function () {

		var zee = new Vector3( 0, 0, 1 );

		var euler = new Euler();

		var q0 = new Quaternion();

		var q1 = new Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); 

		return function ( quaternion, alpha, beta, gamma, orient ) {

			euler.set( beta, alpha, - gamma, 'YXZ' ); 

			quaternion.setFromEuler( euler );

			quaternion.multiply( q1 ); 

			quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); 

		};

	}();

	this.connect = function () {

		onScreenOrientationChangeEvent(); 

        
        if ( window.DeviceMotionEvent ) {

            window.addEventListener( 'devicemotion', onDeviceMotionChangeEvent, false );

        } else {
            console.error("Somethingwrongbabe");
        }

		if ( window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function' ) {

			window.DeviceOrientationEvent.requestPermission().then( function ( response ) {

				if ( response == 'granted' ) {

					window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
					window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

				}

			} ).catch( function ( error ) {

				console.error( 'THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:', error );

			} );

		} else {

			window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
			window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

        }
		scope.enabled = true;

	};

	this.disconnect = function () {

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = false;

	};

	this.update = function () {

		if ( scope.enabled === false ) return;

		var device = scope.deviceOrientation;
		var motion = scope.deviceMotion;
		
		if ( device ) {

			var alpha = device.alpha ? MathUtils.degToRad( device.alpha ) + scope.alphaOffset : 0; // Z

			var beta = device.beta ? MathUtils.degToRad( device.beta ) : 0; // X'

			var gamma = device.gamma ? MathUtils.degToRad( device.gamma ) : 0; // Y''

			var orient = scope.screenOrientation ? MathUtils.degToRad( scope.screenOrientation ) : 0; // O

			setObjectQuaternion( scope.object.quaternion, alpha, beta, gamma, orient );

		}

		if( motion.acceleration != undefined ) {

			let direction = new Vector3();

			let x = Math.floor(motion.acceleration.x),
				y = Math.floor(motion.acceleration.y),
				z = Math.floor(motion.acceleration.z);

			direction.z = Math.sign( z - old.z );

			direction.x = Math.sign( x - old.x );

			direction.y = Math.sign( y - old.y );

			direction.normalize();

			setObjectPosition( direction );

			old = new Vector3( x, y, z );

		}
	};

	this.dispose = function () {

		scope.disconnect();

	};

	this.connect();

};

export { MainControl };