#include<iostream>
using namespace std;
#include<stack>
#include<deque>
class infixtoposfix {
	stack<char>st;
	string postexp;
public:
	infixtoposfix() {
		//postfix = "nstr";
	}
	/*bool isoperand(char oprnd) {
		if (oprnd >= 'a' && oprnd <= 'z') 
			return true;
		
	}*/
	int priority(char oprtr) {
		if (oprtr == '+' || oprtr == '-') {
			return 1;
		}
		if (oprtr == '/' || oprtr == '*') {
			return 2;
		}
		if (oprtr == '^') {
			return 3;
		}
		else {
			return -1;
		}
	}
	
	void inftopst(string infix) {
		// element = infix[0];
		// st.top() = element;
		for (int i = 0; i < infix.length(); i++) {
			char inelmnt = infix[i];
			if (inelmnt == '(') {
				st.push(inelmnt);
			}
			else if ((inelmnt >= 'a' && inelmnt <= 'z')) {
				postexp = postexp + inelmnt;
			}
			else if (inelmnt == ')') {
				while (st.top() != '(') {
					postexp = postexp + st.top();
					st.pop();
				}
				st.pop();
			}
			else if (priority(inelmnt) <= priority(st.top()) || st.top() == '(') {

				while (st.top() != '(') {
					char elmnt = st.top();
					postexp = postexp + elmnt;
					st.pop();
				}
				st.push(inelmnt);
			}
			else
				st.push(inelmnt);
		}
	
	}
	void display() {


		cout << postexp;
	}
};

int main() {
	cout << "Input enter infix expression\n";
	string infixexpression="(a+b*(c/d)^h)";
	infixtoposfix strinpost;
	strinpost.inftopst(infixexpression);
	strinpost.display();
}