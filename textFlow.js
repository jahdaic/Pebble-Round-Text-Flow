/**
 * Reformats a string to flow the text within predefined line widths
 * @param {string} text - The text that will be formatted
 * @param {int[]} lines - An array with integer widths in pixels for each line
 */
function flowForRound( text, lines )
{
	var output = "";

	for ( var i = 0; i < text.length; i++ )
	{		
		// All lines except last
		if ( i < lines.length - 1 )
		{
			var spaceIndex = text.substr( 0, lines[ i ] ).lastIndexOf( ' ' );

			output += text.substr( 0, spaceIndex ).trim() + "\n";
			text = text.substr( spaceIndex + 1 );
		}
		else
		{
			// If final line fits perfectly
			if(text.substr(lines[ i ] + 1) === '')
			{
				output += text.substr( 0, lines[ i ] ).trim();
			}			
			// If final line needs ellipsis, but words fit
			else if ( text.substr( 0, lines[ i ] ).trim().length <= lines[ i ] - 3 )
			{
				output += text.substr( 0, lines[ i ] ).trim() + "...";
			}
			// If we have to cut words to fit ellipsis
			else
			{
				output += text.substr( 0, lines[ i ] - 3 ).trim() + "...";
			}
			
			break;
		}
	}

	return output;
}
