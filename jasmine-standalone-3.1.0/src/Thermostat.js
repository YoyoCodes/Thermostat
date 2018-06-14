'use strict'
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
  this.temperature = this.DEFAULT_TEMPERATURE;
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
}

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
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }else{
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
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

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT) {
    return 'low-usage'
  }else if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'high-usage'
  }else{
    return 'medium-usage'
  }
};
