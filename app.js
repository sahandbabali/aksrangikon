deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

document.getElementById("but11").addEventListener("click", async function() {
      console.log("started");
      document.getElementById("result").innerHTML = `در حال رنگ آمیزی`;

      var resp = await deepai.callStandardApi("colorizer", {
              image: document.getElementById("avatar"),
      });

     console.log(resp)
     document.getElementById("result").innerHTML = `<img src='${resp.output_url}' >`;
  });


