/*
 * This file is part of NectarJS
 * Copyright (c) 2017 - 2020 Adrien THIERRY
 * http://nectarjs.com - https://seraum.com/
 *
 * sources : https://github.com/nectarjs/nectarjs
 * 
 * NectarJS is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * NectarJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with NectarJS.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
 
function ReturnStatement(_path)
{
	if(_path.node && _path.node.argument && _path.node.argument.type == "MemberExpression")
	{
		const _arg = _path.get("argument");
		VISITOR.memberExpression(_path.node.argument);
	}
	else if(!_path.node.argument)
	{
		_path.node.argument =
		{
			"type":"Identifier",
			"name": "undefined",
		}
	}
}
module.exports = ReturnStatement;