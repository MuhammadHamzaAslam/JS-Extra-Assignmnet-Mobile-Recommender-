var budget = prompt('Enter Your Budget ("Low,Medium,High") ')
var operatingSystem = prompt('Enter Operating System ("Android , ios")')
var camera = prompt('Enter Camera Quality ("Basic,Moderate.High")')
var  battery = prompt ('Enter a battery Life ("Short,Average,Long")')
var size = prompt ('Enter a Screen Size ("Small,Medium,Large")')
if(budget == "Low" || budget == "low"){
    if(operatingSystem == "Android" || operatingSystem == "android"){
        if(camera == "Basic" || camera == "basic"){
            if(battery == "Short" || battery == "short"){
                if(size == "Small" || size == "small"){
                    document.write("<h3>Tecno pop 8</h3>")
                    document.write("<h3>Price:800$</h3>")
                    document.write("<h3>Operating System:Android</h3>")
                    document.write("<h3>Camera:Double 8MP</h3>")
                    document.write("<h3>Battery Life:Upto 12 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 5.7 inches</h3>")
                }
            }
        }
    }
}
 
if(budget == "Medium" || budget == "medium"){
    if(operatingSystem == "Android" || operatingSystem == "android"){
        if(camera == "Moderate" || camera == "moderate"){
            if(battery == "average" || battery == "Average"){
                if(size == "Medium" || size == "medium"){
                    document.write("<h3>Samsung a10s</h3>")
                    document.write("<h3>Price:900$</h3>")
                    document.write("<h3>Operating System:Android</h3>")
                    document.write("<h3>Camera:Double 10MP</h3>")
                    document.write("<h3>Battery Life:Upto 14 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 6 inches</h3>")
                }
            }
        }
    }
}

if(budget == "High" || budget == "high"){
    if(operatingSystem == "Android" || operatingSystem == "android"){
        if(camera == "High" || camera == "high"){
            if(battery == "Long" || battery == "long"){
                if(size == "Large" || size == "large"){
                    document.write("<h3>Infinix Hot 12 play</h3>")
                    document.write("<h3>Price:1100$</h3>")
                    document.write("<h3>Operating System:Android</h3>")
                    document.write("<h3>Camera:Triple 14MP</h3>")
                    document.write("<h3>Battery Life:Upto 18 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 6.5 inches</h3>")
                }
            }
        }
    }
}
else{
    alert("Requirement dosen't match")
}



// iphone 

if(budget == "Low" || budget == "low"){
    if(operatingSystem == "ios" || operatingSystem == "IOS"){
        if(camera == "Basic" || camera == "basic"){
            if(battery == "Short" || battery == "short"){
                if(size == "Small" || size == "small"){
                    document.write("<h3>iPHONE 8 plus</h3>")
                    document.write("<h3>Price:850$</h3>")
                    document.write("<h3>Operating System:ios</h3>")
                    document.write("<h3>Camera:Double 12MP</h3>")
                    document.write("<h3>Battery Life:Upto 12 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 5.7 inches</h3>")
                }
            }
        }
    }
}

if(budget == "Medium" || budget == "medium"){
    if(operatingSystem == "ios" || operatingSystem == "IOS"){
        if(camera == "Moderate" || camera == "moderate"){
            if(battery == "Average" || battery == "average"){
                if(size == "Medium" || size == "medium"){
                    document.write("<h3>iPHONE X max</h3>")
                    document.write("<h3>Price:1050$</h3>")
                    document.write("<h3>Operating System:ios</h3>")
                    document.write("<h3>Camera:Double 14MP</h3>")
                    document.write("<h3>Battery Life:Upto 12 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 6 inches</h3>")
                }
            }
        }
    }
}

if(budget == "High" || budget == "high"){
    if(operatingSystem == "ios" || operatingSystem == "IOS"){
        if(camera == "High" || camera == "high"){
            if(battery == "Long" || battery == "long"){
                if(size == "Large" || size == "large"){
                    document.write("<h3>iPHONE 13 pro max</h3>")
                    document.write("<h3>Price:1450$</h3>")
                    document.write("<h3>Operating System:ios</h3>")
                    document.write("<h3>Camera:Double 16MP</h3>")
                    document.write("<h3>Battery Life:Upto 18 hours</h3>")
                    document.write("<h3>Screen Size:Screen size 6.6 inches</h3>")
                }
            }
        }
    }
}