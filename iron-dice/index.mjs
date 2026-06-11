Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem(
    { id: "Ixca", name: "Ixca", group: "Iron" },
    "default"
  );
	dice3d.addDicePreset({
		type: 'd2',
		modelFile: 'modules/iron-dice/ixca/d2.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd4',
		modelFile: 'modules/iron-dice/ixca/d4.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd6',
		modelFile: 'modules/iron-dice/ixca/d6.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd8',
		modelFile: 'modules/iron-dice/ixca/d8.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd10',
		modelFile: 'modules/iron-dice/ixca/d10.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd12',
		modelFile: 'modules/iron-dice/ixca/d12.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd20',
		modelFile: 'modules/iron-dice/ixca/d20.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'd100',
		modelFile: 'modules/iron-dice/ixca/d100.glb',
		system: 'Ixca'
	});
	
	dice3d.addDicePreset({
		type: 'df',
		modelFile: 'modules/iron-dice/ixca/df.glb',
		system: 'Ixca'
	});
});