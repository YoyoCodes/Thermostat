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
});
