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
 
function StringLiteral(_path)
{
	if(_path.node.extra.raw[0] && _path.node.extra.raw[0] == "'")
	{
		_path.node.extra.raw = '"' + _path.node.value.replace(/\\/g, '\\\\').replace(/"/g, '\\\"') + '"';
	}

	if(_path.parent.type == "MemberExpression" || _path.parent.type == "CallExpression" 
	|| _path.parent.type == "AssignmentExpression" || _path.parent.type == "VariableDeclarator")
	{
		//nothing to do
	}
	else 
	{
		_path.replaceWithSourceString("__Nectar_InitVar(" + _path.node.extra.raw + ")");
		_path.skip();
	}
}
module.exports = StringLiteral;