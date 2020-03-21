jQuery( function( $ ) {
	$( ".is-hamburger" ).click( function() {
		$( this ).toggleClass( "is-open" );
		$( ".p-gmenu" ).toggleClass( "is-open" );
	} );
} );