'strict mode'
describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
   expect(thermostat.getCurrentTemperature()).toEqual(20);
 });

  it('increases temperature with the up function',function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with the down function',function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it ('can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });

  it ('can switch power saving mode on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can be reset to 20', function(){
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is of', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
  describe('when the temperature is below 18', function(){
    it('has a low power usage', function() {
      for ( var i = 0; i < 3; i++) {
        thermostat.down();
      }
    expect(thermostat.powerUsage()).toEqual('low-usage')
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function(){
    it('has a medium power usage', function(){
      for ( var i = 0; i<3; i++) {
        thermostat.up();
      }
    expect(thermostat.powerUsage()).toEqual('medium-usage')
    });
  });

  describe('when the temperature is above 25 degrees', function(){
    it('has a high power usage', function(){
      thermostat.switchPowerSavingModeOff();
      for ( var i = 0; i < 6; i++) {
        thermostat.up();
      }
    expect(thermostat.powerUsage()).toEqual('high-usage')
    });
  });
});
