const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODI5Y2IwNGY3OTBkMzA4MTI4MjQ3OWMiLCJyb2xlSWQiOiI2ODI5YzE1M2Y3OTBkMzA4MTI4MjQ3OTAiLCJpYXQiOjE3NDc2NTkyNTF9.d9guh9uJztLD3jEyJADqgAlPrw9zBttGtJnD1a3IOK4";

async function get() {
    let response = await fetch("http://localhost:3000/sections", {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
}

get();