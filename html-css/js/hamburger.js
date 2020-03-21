jQuery( function( $ ) {
	let timer = 0;
	$( ".is-hamburger" ).click( function() {
		$( this ).toggleClass( "is-open" );
		let flg = $( this ).hasClass( "is-open" );
		if( flg ) {
			$( ".st1" ).attr( menuOpen().st1 );
			$( ".st3" ).attr( menuOpen().st3 );
		} else {
			$( ".st1" ).attr( menuClose().st1 );
			$( ".st3" ).attr( menuClose().st3 );
		}
		$( ".p-gmenu" ).toggleClass( "is-open" );
	} );
} );

function menuOpen() {
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
	return data;
}
function menuClose() {
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
	return data;
}