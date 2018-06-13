'use strict'
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10
  this.MAXIMUM_TEMPERATURE = 25
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true
};
