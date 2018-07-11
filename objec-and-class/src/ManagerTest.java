import java.time.*;

public class ManagerTest {
    public static void main(String[] args) {
        Manager boss = new Manager("Carl Craker", 8000, 1987, 12, 15);
        boss.setBonus(5000);

        Manager boss2 = new Manager();
        boss2.setBonus(5000);





        Employee[] staff = new Employee[4];
        staff[0] = boss;
        staff[1] = boss2;
        staff[2] = new Employee("Harry", 5000, 1989, 10, 1);
        staff[3] = new Employee("Tommy", 4000, 1990, 3, 15);

        for (Employee e:staff) {
            System.out.println("name:" + e.getName() + ",salary:" + e.getSalary());
        }
    }
}

class Manager extends Employee{
    private double bonus;

    public Manager(String name, double salary, int year, int month, int day) {
        super(name, salary, year, month, day);
        bonus = 0;
    }

    public Manager(){
        super();
    }

    public double getSalary() {
        double baseSalary = super.getSalary();
        return baseSalary + bonus;
    }

    public void setBonus(double b) {
        bonus = b;
    }
}

class Employee{
    private String name;
    private double salary;
    private LocalDate hireDay;
    protected int id;

    public Employee(String name, double salary, int year, int month, int day) {
        this.name = name;
        this.salary = salary;
        this.hireDay = LocalDate.of(year, month, day);
    }

    public Employee() {

    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public LocalDate getHireDay() {
        return hireDay;
    }

    public void raiseSalary(double byPercent) {
        double raise = salary * byPercent / 100;
        salary += raise;
    }
}