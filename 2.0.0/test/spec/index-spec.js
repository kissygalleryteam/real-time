KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('real-time', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/real-time/2.0.0/']});