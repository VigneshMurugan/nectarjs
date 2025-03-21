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
 
var _SEARCH = new RegExp(/['"]!_package *(.*)['"]/);

function genPackage(from, src)
{
  var _match = src.match(_SEARCH);
  while(_match)
  {
    var _target = _match[1].replace(/{__ARCH__}/g, os.arch());
    copyRecursiveSync(path.resolve(path.join(from, _target)), path.join(COMPILER.TMP_FOLDER, _target));
    COMPILER.PACK.push(path.join(COMPILER.TMP_FOLDER, _target));
    src = src.replace(/['"]!_package *(.*)['"]/, "");	
    _match = src.match(_SEARCH);
  }
  
  return src;
}
module.exports = genPackage;
