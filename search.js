(function(){
var INDEX=[
["City home","index.html","Welcome to Lego City city services departments news"],
["Permits and building","index.html#services","building permit event permit street closure inspection license"],
["Trash and recycling","index.html#services","garbage trash recycling pickup bulky items schedule"],
["Parks and recreation","index.html#services","parks playground recreation waterfront events programs"],
["Utilities","index.html#services","water power electric street lighting outage billing"],
["Transit and roads","index.html#services","bus transit roads potholes traffic road work"],
["Business licenses","index.html#services","business license tax register new business"],
["Report a problem (311)","index.html#services","311 pothole graffiti streetlight report issue request"],
["Departments","index.html#departments","police fire public works clerk parks planning departments"],
["City Hall","index.html#contact","city hall 150 S Main St address hours mayor council clerk"],
["Mayor and City Council","index.html#government","mayor council members meetings agenda vote"],
["News and announcements","index.html#news","news announcements harbor street resurfacing central park playground council"],
["Contact the city","index.html#contact","email hello@lccity.republicstates.xyz phone contact"],
["Lego City Police Department","police.html","lcpd police department law enforcement"],
["Report a concern","police.html#report","report crime non-emergency 911 online report theft vandalism"],
["Police locations","police.html#locations","headquarters station booth academy airport address location"],
["LCPD Headquarters","police.html#locations","50 S Main St downtown headquarters"],
["Union Station Police Booth","police.html#locations","100 S Union Station Way booth train station"],
["Emergency Headquarters","police.html#locations","150 W Police Rd south lego city emergency"],
["LCPD Police Academy","police.html#locations","1200 N Main St academy training recruits"],
["FLX Airport Police Booth","police.html#locations","450 E FLX Way airport felix lego city international"],
["Police records","police.html#records","records incident report copy background check impound lost and found"],
["Community programs","police.html#community","neighborhood watch coffee with a cop youth safety academy"],
["Police careers","police.html#careers","jobs hiring officer dispatcher records clerk apply academy"],
["Police contact","police.html#contact","email phone front desk hours"]
];
document.querySelectorAll(".search").forEach(function(box){
var input=box.querySelector("input"),list=box.querySelector(".results"),form=box.querySelector("form");
function run(){
var q=input.value.trim().toLowerCase();
if(!q){list.hidden=true;return[]}
var words=q.split(/\s+/);
var hits=INDEX.filter(function(r){var s=(r[0]+" "+r[2]).toLowerCase();return words.every(function(w){return s.indexOf(w)>-1})});
list.innerHTML=hits.length?hits.slice(0,8).map(function(r){return '<li><a href="'+r[1]+'">'+r[0]+'<small>'+r[2].split(" ").slice(0,6).join(" ")+'</small></a></li>'}).join(""):'<li class="none">No results for "'+q.replace(/</g,"")+'". Try "permits", "police" or "trash".</li>';
list.hidden=false;return hits;}
input.addEventListener("input",run);
form.addEventListener("submit",function(e){e.preventDefault();var h=run();if(h.length)location.href=h[0][1]});
document.addEventListener("click",function(e){if(!box.contains(e.target))list.hidden=true});
input.addEventListener("keydown",function(e){if(e.key==="Escape")list.hidden=true});
});
})();
