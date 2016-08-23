'use strict';

module.exports = function(id, fsc) {
  if (isNaN(id)) return false;
  if (!isFinite(id)) return false;
  if (id < 1) return false;
  if (typeof(fsc.images[id - 1]) === 'undefined') return false;
  return true;
};
