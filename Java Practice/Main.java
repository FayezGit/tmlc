import java.util.Scanner;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number:");
        long n = sc.nextLong();
        System.out.println("Enter the digit:");
        long d = sc.nextLong();
        DigitAnalyzer dig = new DigitAnalyzer();
        System.out.println("Count of digit " + d + " in " + n + " is " + dig.countDigit(n,d));
    }
}
// To run java file manually
//javac Main.java
//java Main