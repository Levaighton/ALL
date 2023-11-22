#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

using vc = vector<char>;
using vvc = vector<vc>;
using vi = vector<int>;

void print(vvc& board){
    for(int i = 0; i < 8; ++i) {
        for(int j = 0; j < 8 ; ++j) {
            if (board [i][j]){
                cout << board [i][j] << ' ';
            }
            else {
                cout << ' ' ;
            }
            cout << endl ;
        }
    }
}

bool mark(vvc& board, vvc& check, int r, int c){
    if (!(0 <= r && r < 8 && 0 <= c && c < 8)){
        return false;
    }
    if (!board[r][c]){
        check[r][c] = 'C' ;
        return true;
    }
    check[r][c] = 'C';
	return false;
}