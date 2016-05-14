<script>
 /*
  System Local UserGroup 
  MIT License
   G Matyila 
  w: businessdomains.co.za
  e: net@cdn.businessdomains.co.za
 */

 //namespaces
 var accounts = accounts || {} 
 accounts.users = {}; 
 accounts.members = {};
 accounts.group = [];//collections
 
 //expand object properties 
 accounts.users.localsystem = null;
 accounts.users.cloud = 5; 
 accounts.members.remote = 2;
 accounts.group = ['admin', 'guests']; 
 
 //methods to call to object
 var systemsAdmins = function(sysLocal, sysCloud, sysRemote){
  var groupMembers = this.group[0];
   this.users.localsystem = sysLocal;
   this.users.cloud = sysCloud;
   this.members.remote = sysRemote;
   
   //object returned parasitic 
    return groupMembers ={
     administrators: [sysLocal,sysCloud,sysRemote],
     systemRights: groupMembers
    };
 }
 //variable @res allcoated result of @systemAdmin Call 
 var res = systemsAdmins.call(accounts, 1,2,3); 
console.log(res); //print out to console


//Result of this program would be ff: 

//OBJECT { administrators: Array[3] , systemRights: "admin" }  





</script>