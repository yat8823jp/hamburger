jQuery( function( $ ) {
	let timer = 0;
	$( ".is-hamburger" ).click( function() {
		$( this ).toggleClass( "is-open" );
		$( ".p-gmenu" ).toggleClass( "is-open" );
	} );
} );