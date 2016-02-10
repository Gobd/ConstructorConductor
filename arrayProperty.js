//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

String.prototype.reverse = function(){
  var arr = this.split("");
  var ret = [];
for (i=arr.length;i>=0;i--) {
  ret.push(arr[i]);
}
return ret.join("");
};
