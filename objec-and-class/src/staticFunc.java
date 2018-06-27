public class staticFunc {
    public static void main(String[] args){
        FuncTest func = new FuncTest();
//        System.out.println(func.getId());
        System.out.println(func.getNextId());

        System.out.println("add:" + func.add(1,2));
    }
}

class FuncTest{
    private int id = 10;
    private static int nextId = 1;

    /*public static int getId(){
        return id;
    }*/

    public static int getNextId(){
        return nextId;
    }

    public static int add(int a, int b) {
        return a+b;
    }
}


