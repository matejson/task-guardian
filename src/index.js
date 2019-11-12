var url = 'https://content.guardianapis.com/search?api-key=0eb538ac-80f4-4441-81fd-2b241510e567'
var grid = document.getElementById('grid')
var element = document.querySelector("#paragraph")


window.onload = function () {
    fetch(url)

        .then(function (res) {
            return res.json()

        })
        .then(function (data) {
console.log(data)
            var devops = function myFunc(onload) {
                var number = onload


                var parent = document.createElement("div")
grid.appendChild(parent);
                 parent.classList.add("wrapper")
                
                
                var title = data.response.results

                var child = document.createElement("h1");
                child.innerHTML = title[number].webTitle;
                parent.appendChild(child);
                child.classList.add("title");


                var child2 = document.createElement("h2")
                child2.innerHTML = title[number].sectionId
                parent.appendChild(child2);
                child2.classList.add("sectionID");


                var child3 = document.createElement("p")
                child3.innerHTML = title[number].webPublicationDate
                parent.appendChild(child3);
                child3.classList.add("date");


                var child4 = document.createElement("button")
                child4.innerHTML = "click to redirect"
                child4.onclick = function () {
                    window.open(title[number].webUrl)
                }
                child4.classList.add("button");
                parent.appendChild(child4);
      
                
                return data
            }
            array = data.response.results

            array.forEach(function (value, index) {
                devops(index++)



            })

            var page = data.response.currentPage


            document.getElementById("next").onclick = function nextPage() {
                page = page + 1;
                console.log(page);


            }

        })
        .catch(function (err) {
            console.log(err)
        })

}











// searching

var TRange = null;

function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    } else if (navigator.appName.indexOf("Microsoft") != -1) {  
        if (TRange != null) {
            TRange.collapse(false)
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
        if (TRange == null || strFound == 0) {
            TRange = self.document.body.createTextRange()
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
    } else if (navigator.appName == "Opera") {
        alert("Opera browsers not supported, sorry...")
        return;
    }
    if (!strFound) alert("String '" + str + "' not found!")
        return;
};

document.getElementById('f1').onsubmit = function() {
    findString(this.t1.value);
    return false;
};
