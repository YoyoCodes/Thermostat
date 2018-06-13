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
    thermostat.up(5);
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('decreases the temperature with the down function',function(){
    thermostat.down(3);
    expect(thermostat.getCurrentTemperature()).toEqual(17);
  });
});
