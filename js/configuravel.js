Product.Config.prototype.configureElement = Product.Config.prototype.configureElement.wrap(function(parentMethod, element){
    console.log("Passou")
    return parentMethod(element)
})