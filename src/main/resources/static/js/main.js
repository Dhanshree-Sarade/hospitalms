	

function addNew(){
	
	alert("Saved details successfully...");
	let id = document.getElementById("id").value;
	let name = document.getElementById("name").value;
	let address = document.getElementById("address").value;
	let doctor = document.getElementById("doctor").value;
	
	let showData = {
		//id : id,
		name : name,
		address : address,
		doctor : doctor
	}
	console.log(showData);
	
	$.ajax({
				type: "POST",
				contentType: "application/json",
				url: '/addData',
				data: JSON.stringify(showData),
				dataType: 'json',
				success: function (response) {
					alert(response);
					loadData(); 
				},
				error: function (e) {
					alert("Not Working..");
				}
			});
			 
			
	}
	
	
	function loadData(){
		$.ajax({
				type: "GET",
				contentType: "application/json",
				url: '/getData',
				dataType: 'json',
				success: function (data) {

				console.log(data)

				var d = '';

				for (var i = 0; i < data.length; i++) {

				d += '<tr>' +

				'<td > ' + data[i].id + '</td>' +
				'<td > ' + data[i].name + '</td>' +
				'<td > ' + data[i].address + '</td>' +
				'<td > ' + data[i].doctor + '</td>' +
				'<td>' + '<button data-bs-toggle="modal" data-bs-target="#exampleModa1" onclick="editData(' + data[i].id + ')"><i class="bi bi-pencil-square"></i></button>'  +
				'<button  " onclick="deleteData(' + data[i].id + ')"><i class="bi bi-trash"></i></button>' + '</td>' +
				'</tr >'
			 }

            $('#table').html(d); 
        },
        error: function () {
            alert("Error loading data...");
        }
    });
}

function editData(id){
	alert("button was clicked...")
	console.log("Id is :" + id);
	
	$.ajax({
				type: "GET",
				contentType: "application/json",
				url: '/getData/'+id,
				dataType: 'json',
				success: function (data) {
		if(data){
		console.log("id : " + data.id);
		console.log("Name : " + data.name);
		console.log("Aaddress : " + data.address);
		console.log("Number of Doctors : " + data.doctor);
		
		 document.getElementById("id1").value = data.id;
		 document.getElementById("name1").value = data.name;
		 document.getElementById("address1").value = data.address;
		 document.getElementById("doctor1").value = data.doctor;
	}
	
	},
	error : function(e){
		console.log("Error in feching data for Id....");
	}
	});
	}
	
	function updateData(){
		alert("Button Was Clicked....");
		let id = document.getElementById("id1").value;
		let name = document.getElementById("name1").value;
		let address = document.getElementById("address1").value;
		let doctor = document.getElementById("doctor1").value;
		
		
		let updatedData ={
			id : id,
			name : name,
			address : address,
			doctor : doctor
		};
		console.log(updatedData);
		$.ajax({
				type: "PUT",
				contentType: "application/json",
				url: "/editData",
				data: JSON.stringify(updatedData),
				dataType: 'json',
				success: function (response) {
					alert(response);
					loadData();
				},
				error: function (e) {
					alert("Not Working..");
				}
			});
			
	}
					
					
	function deleteData(id){
		alert("Details will be deleted ?")
		console.log("Id is : " + id);
		
		$.ajax({
			type: "DELETE",
			contentType: "application/json",
			url: '/deleteData/'+id,
			success: function (response){
				alert(response);
				loadData();
			},
			error: function(e){
				alert("Details not deleted...");
			}
		});
	}		
					
					
					
					
					
					
					
					
					