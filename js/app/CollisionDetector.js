var COLLIDER = COLLIDER || {};

COLLIDER.checkCollision = function(r1, r2)
{
    return !((r2.position.x + r2.parent.position.x) > (r1.position.x + r1.width) ||
           ((r2.position.x + r2.parent.position.x) + r2.width) < r1.position.x   ||
           (r2.position.y + r2.parent.position.y) > (r1.position.y + r1.height)  ||
           ((r2.position.y + r2.parent.position.y) + r2.height) < r1.position.y) &&
           r1.id === r2.id;
};
