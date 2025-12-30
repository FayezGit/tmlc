public class DigitAnalyzer {
    int countDigit(long num, long d) {
        int count = 0;
        while (num !=0) {
            if(num%10==d) {
                count++;
            }
            num /= 10;
        }
        return count;
    }
}

