#include <iostream>
using namespace std;
int main(){
    int p = 5, c = 2;
    cin >> p >> c ;
    int ans = 0 ;
    ans = p*50 - c*10 ;
    if(p > c){
        ans = ans + 500 ;
    }
    cout << ans << endl ;
    return 0 ;
}