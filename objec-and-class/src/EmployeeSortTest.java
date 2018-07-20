import java.lang.reflect.Array;
import java.util.Arrays;

public class EmployeeSortTest {
    public static void main(String args []) {
        Employee3[] stff = new Employee3[3];

        stff[0] = new Employee3("person1", 8000);
        stff[1] = new Employee3("person2", 5000);
        stff[2] = new Employee3("person3", 6000);

        Arrays.sort(stff);

        for (Employee3 e:stff) {
            System.out.println("name=" + e.getName() + ",salary=" + e.getSalary());
        }
    }
}

class Employee3 implements Comparable<Employee3>, aa<Employee3> {
    private String name;
    private double salary;

    public Employee3(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return this.name;
    }

    public double getSalary() {
        return this.salary;
    }

    void raiseSalary(double byPercent) {
        double raise = salary * byPercent / 100;
        salary+=raise;
    }

    @Override
    public int compareTo(Employee3 other) {
        return Double.compare(salary, other.salary);
    }


    @Override
    public int add(Employee3 a, int b) {
        return a+b;
    }
}

class Employee4 implements Comparable<Employee4>, aa<Employee4> {
    private String name;
    private double salary;

    public Employee4(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return this.name;
    }

    public double getSalary() {
        return this.salary;
    }

    void raiseSalary(double byPercent) {
        double raise = salary * byPercent / 100;
        salary+=raise;
    }

    @Override
    public int compareTo(Employee4 other) {
        return Double.compare(salary, other.salary);
    }


    @Override
    public int add(Employee4 a, int b) {
        return a*b;
    }

    public static void main(String[] args) {
        aa a = new Employee3("12", 12);
        a.add()
    }
}

interface aa<T> {
    int add(T a, int b);
}

/*class Employee3{
    private String name;
    private double salary;

    public Employee3(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return this.name;
    }

    public double getSalary() {
        return this.salary;
    }

    void raiseSalary(double byPercent) {
        double raise = salary * byPercent / 100;
        salary+=raise;
    }

}

interface Comparable<Employee3>{
    int compareTo(Employee3 other) {
        return Double.compare(this.salary, other.salary);
    }
}*/

