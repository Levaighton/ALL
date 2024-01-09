/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;
function start(){
    snowManHead();
    snowManBody();
    snowManLeg();
}
function snowManHead(){
    var snowHead = new Circle(TOP_RADIUS);
    snowHead.setPosition(200,100);
    snowHead.setColor(Color.gray);
    add(snowHead);
}
function snowManBody(){
    var snowBody = new Circle(MID_RADIUS);
    snowBody.setPosition(200,190);
    snowBody.setColor(Color.gray);
    add(snowBody);
}
function snowManLeg(){
    var snowLeg = new Circle(BOTTOM_RADIUS);
    snowLeg.setPosition(200,350);
    snowLeg.setPosition(Color.gray);
    add(snowLeg);
}