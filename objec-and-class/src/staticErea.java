/*
* static变量被所有实例共享
* */

public class staticErea {
    public static void main(String[] args) {
        ereaTest erea = new ereaTest();
        System.out.println("id："+erea.getId());
        System.out.println("nextId:"+erea.getNextId());
        erea.setNextId(2);
        System.out.println("nextId:"+erea.getNextId());
        erea.setId(20);
        System.out.println("id："+erea.getId());

        ereaTest erea2 = new ereaTest();
        System.out.println("area2");
        System.out.println("id："+ erea2.getId());
        System.out.println("nextId:"+ erea2.getNextId());
    }
}

class ereaTest{
    private static int nextId = 1;
    private int id = 10;

    public static int getNextId() {
        return nextId;
    }

    public static void setNextId(int nextId) {
        ereaTest.nextId = nextId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
