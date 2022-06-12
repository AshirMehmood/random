#include<iostream>
using namespace std;
#include<string>
#include<stack>
class postfixtoinfix {
	string postfix;
	string converted;
	stack<string>infixst;
public:
	postfixtoinfix(string poststring) {
		postfix = poststring;
	}
	void postfixtoinfixconvert() {
		for (int i = 0; i<postfix.length(); i++) {
				if ((postfix.at(i)) == '+' || (postfix.at(i)) == '-' || (postfix.at(i)) == '/' || (postfix.at(i)) == '*' || (postfix.at(i)) == '^') {
					string top1 = infixst.top();
					infixst.pop();
					string top2=infixst.top();
					infixst.pop();
				    converted = top2 + postfix.at(i) + top1;
					infixst.push("("+converted+")");
				}
				if ((postfix.at(i)) >= 'a' && (postfix.at(i)) <= 'z' || (postfix.at(i)) >= 'A' && (postfix.at(i)) <= 'Z') {
					string charatstring(1, postfix[i]);
					infixst.push(charatstring);
				}
		}
	}
	void display() {
		cout << "The converted string from postfix to infix is " << infixst.top() << endl;
	}
};

int main() {
	postfixtoinfix p("ab+cd-*");
	p.postfixtoinfixconvert();
	p.display();
}