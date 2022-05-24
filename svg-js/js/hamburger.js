document.querySelector( '.js-hamburger' ).addEventListener(
	'click',
	() => {
		const btn = document.querySelector( '.js-hamburger' );
		btn.classList.toggle( 'is-open' );
		if( btn.classList.contains( 'is-open' ) == true ) {
			menuOpen( document.querySelector( ".st1" ) );
			menuOpen( document.querySelector( ".st3" ) );
		} else {
			menuClose( document.querySelector( ".st1" ) );
			menuClose( document.querySelector( ".st3" ) );
		}
		document.querySelector( ".p-gmenu" ).classList.toggle( "is-open" );
	}
);

function menuOpen( selector ) {
	let classname = selector.className.baseVal;
	let data = {
		st1: {
			"x": 20,
			"y": 29.5,
			"transform": "matrix(0.7071 0.7071 -0.7071 0.7071 29.9943 -12.4126)"
		},
		st3: {
			"x": 20,
			"y": 29.5,
			"transform": "matrix(0.7071 -0.7071 0.7071 0.7071 -12.4264 30)"
		}
	};
	loop( selector, data[classname] );
}
function menuClose( selector ) {
	let classname = selector.className.baseVal;
	let data = {
		st1: {
			"x": 20,
			"y": 22,
			"transform": "matrix( 1 0 0 1 0 0 )"
		},
		st3: {
			"x": 20,
			"y": 38,
			"transform": "matrix( 1 0 0 1 0 0 )"
		}	
	};
	loop( selector, data[classname] );
}

function loop( selector, object ) {
	for( let j of Object.entries( object ) ) {
		selector.setAttribute( j[0], j[1] );
	}
}