jQuery( function( $ ) {
	$( ".js-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".p-gmenu" ).toggleClass( "is-open" );
		$( "body" ).toggleClass( "is-open" );
	} );
} );