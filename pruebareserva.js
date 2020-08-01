let habitaciones = [
	{
		id: 1,
		nombre: "cancha1",
		tipo: "cuadruple",
		descripcion: "",
		precio: 150000,
		reservas: [
			{ fechaIng: "15-08-2020", fechaSalid: "16-08-2020" },
			{ fechaIng: "17/08/2020", fechaSalid: "18/08/2020" },
			{ fechaIng: "20/08/2020", fechaSalid: "25/08/2020" },
		],
	},
	{
		id: 2,
		nombre: "mirador",
		tipo: "doble",
		descripcion: "",
		precio: 100000,
		reservas: [
			{ fechaIng: "20-08-2020", fechaSalid: "16-08-2020" },
			{ fechaIng: "25/08/2020", fechaSalid: "18/08/2020" },
			{ fechaIng: "30/08/2020", fechaSalid: "25/08/2020" },
		],
	},
	{
		id: 3,
		nombre: "paises",
		tipo: "ocho",
		descripcion: "",
		precio: 300000,
		reservas: [
			{ fechaIng: "12-08-2020", fechaSalid: "16-08-2020" },
			{ fechaIng: "16/08/2020", fechaSalid: "18/08/2020" },
			{ fechaIng: "18/08/2020", fechaSalid: "25/08/2020" },
		],
	},
];

// console.log(habitaciones[0].reservas[1]);

// for (const hab of habitaciones) {
//     let reservas = hab.reservas;
//     console.log(hab.nombre);
//     for (const res of reservas) {
//         console.log(res.fechaIng);
//     }
// }

fetch("/habitaciones.json")
	.then((data) => data.json())
	.then((data) => {
		let reservhab;
		data.forEach((element) => {
			reservhab = element.reservas;
			console.log(element.nombre);
			reservhab.forEach((element) => {
				console.log(element.fechaIng);
			});
		});
	});
