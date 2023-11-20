#include <iostream>
#include <algorithm>

using namespace std;

long dr(long num) {
	long res = 0;
	while(num >= 10) {
		res += (num % 10);
		num /= 10;
		if(num < 10) {
			res += num;
			num = res;
			res = 0;
		}
	}
	return num;
}

int numralTriangls(int s, int d, int r) {
	long num = s; 
	int sum = 0;
	for(long i = 0; i < r; ++i) {
			sum = 0; long j = 0;
			for(; j <= i; ++j) {
				num = dr(num);
				sum += num;
				num += d;
			}
		}
	return sum;
}

int main() {  
	cout<<numralTriangls(2, 3, 5)<<endl;
	// for(long n = 0; n < 5; ++n) {
	// 	long s,d,r;s >> d >> r;
	// 	long sum;
	// 	c
	// 	for(long i = 0; i < r; ++i) {
	// 		sum = 0; long j = 0;
	// 		for(; j <= i; ++j) {
	// 			num = dr(num);
	// 			sum += num;
	// 			num += d;
	// 		}
	// 	}
	// 	cout << sum << endl;
	// }
	return 0;
}