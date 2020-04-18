import {
	Euler,
	MathUtils,
	Quaternion,
	Vector3
} from "../three.addons/three.module.js";

var MainControl = function ( object ) {

	var scope = this;

	var old = new Vector3(), velocity = new Vector3(), vec = new Vector3();

	const THOUSENDS = 1000, ONE = 1;

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
		console.log("update v0.4.1")
	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};
	var setObjectPosition = function ( direction ) {

		var omega = 10;

		if(direction.x == 0)
			velocity.x -= velocity.x * .999999999;
		else {

			velocity.x -= direction.x * omega;

		}
		if(direction.z == 0)
			velocity.z -= velocity.z  * .9999999999;
		else {

			velocity.z -= direction.z * omega;

		}
		if(direction.y == 0)
			velocity.y -= velocity.y  * .9999999999;
		else {

			velocity.y -= direction.y * omega;

		}
		
		scope.move( velocity );

	};
	
	this.move = function ( velocity ) {

		object.position.addScaledVector( velocity, ONE );


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

			let x = Math.round(motion.acceleration.x) - old.x,
				y = Math.round(motion.acceleration.y) - old.y,
				z = Math.round(motion.acceleration.z) - old.z;

			direction.z = z > 1 || z < -1 ? Math.sign( z ) : 0;

			direction.x = x > 1 || x < -1 ? Math.sign( x ) : 0;

			direction.y = y > 1 || y < -1 ? Math.sign( y ) : 0;

			direction.normalize();

			setObjectPosition(direction);

			old = new Vector3( x, y, z );

		}
	};

	this.dispose = function () {

		scope.disconnect();

	};

	this.connect();

};

export { MainControl };