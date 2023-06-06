var numBer =document.getElementById("num");
var numBer2 =document.getElementById("num2")
var res =document.getElementById("result")

function add(){
    value = Number(numBer.value)
    value2 = Number(numBer2.value)
    var res = value +value2
    document.getElementById("result").value = res
    document.getElementById("result").value == " "
}
    

    function sub(){
        value = Number(numBer.value)
        value2 = Number(numBer2.value)
        var res = value -value2
        document.getElementById("result").value = res
        document.getElementById("result").value == " "
    
    }

    function multi(){
        value = Number(numBer.value)
        value2 = Number(numBer2.value)
        var res = value *value2
        document.getElementById("result").value = res
        document.getElementById("result").value == " "
    
    }

    function div(){
        value = Number(numBer.value)
        value2 = Number(numBer2.value)
        var res = value /value2
        document.getElementById("result").value = res
        document.getElementById("result").value == " "
    
    }
    function mud(){
        value = Number(numBer.value)
        value2 = Number(numBer2.value)
        var res = value %value2
        document.getElementById("result").value = res
        document.getElementById("result").value == ""
    
    }
    
//  didnt match by requirments


    // / document.getElementById("add").addEventListener
    // ("click", function(){
    //     res.value=
    //     parseInt(numBer.value)+parseInt(numBer2.value)
    // })
    
    // document.getElementById("sub").addEventListener
    // ("click", function(){
    //     res.value=
    //     parseInt(numBer.value)-parseInt(numBer2.value)
    // })
    
    // document.getElementById("multi").addEventListener
    // ("click", function(){
    //     res.value=
    //     parseInt(numBer.value)*parseInt(numBer2.value)
    // })
    
    // document.getElementById("div").addEventListener
    // ("click", function(){
    //     res.value=
    //     parseInt(numBer.value)/parseInt(numBer2.value)
    // })
    
    // document.getElementById("mud").addEventListener
    // ("click", function(){
    //     res.value=
    //     parseInt(numBer.value)%parseInt(numBer2.value)
    // }) 
