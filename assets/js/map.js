
(function() {



})();




function pointToLocation(lat, lng) {
    var iframe = document.getElementById('custom_map');
    iframe.src = `https://www.google.com/maps/d/u/0/embed?mid=1Feh5ETZFq3C4TCF-OrgH1DXUp1rSjbA&ehbc=2E312F&noprof=1&ll=${lat},${lng}&z=15`;
}


function resetMap() {
    var iframe = document.getElementById('custom_map');
    iframe.src = 'https://www.google.com/maps/d/u/0/embed?mid=1Feh5ETZFq3C4TCF-OrgH1DXUp1rSjbA&ehbc=2E312F&noprof=1';
}