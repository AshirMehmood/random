#include<iostream>
using namespace std;

class Node {
	int data;
	Node* next;
	Node* tail;
	Node* head;

public:
	Node() {
		data = 0;
		next = nullptr;
		tail = nullptr;
		head = nullptr;
	}
	void insert(int Data) {
		Node* node = new Node();
		if (head == nullptr) {
			head = node;
			node->data = Data;
			tail = head;
		}
		else {
			tail->next = node;
			tail = node;
			node->data = Data;
		}
	}
	void display() {
		Node* ptr = head;
		while (ptr != NULL) {
			cout << " " << ptr->data<<"-->";
			ptr = ptr->next;
		}
		cout << "NULL";
		cout << endl;
	}
	void NodeExists(int k){
		Node* temp = head;
		while (temp != NULL) {
			if (temp->data == k) {
				cout << "Yes the node exist " << endl;
			}
			if(temp->next==NULL&&temp->data!=k) {
				cout << "invalid key" << endl;
			}
			temp = temp->next;
	}
	}
	void Insert_At_Begin(int data) {
		Node* node = new Node();
		node->next = head;
		head = node;
		head->data = data;
	}
	void Insert_After(int k,int pos) {
		Node* ptr = head;
		Node* node = new Node();
		int count=1;
		while (ptr->next != NULL) {
			count++;
			ptr = ptr->next;
		}
		if (pos == 1) {
			node->next = head->next;
			head->next = node;
			node->data = k;
		}
		if (pos <= count&&pos>1) {
			ptr = head;
			for (int i = 0; i < pos-1; i++) {
				ptr = ptr->next;
			}
			node->next = ptr->next;
			ptr->next = node;
			node->data = k;
		}
	}
	void Delete_Node(int pos) {
		Node* node = new Node();
		Node* ptr = head;
		int count = 1;
		while (ptr->next != NULL) {
			count++;
			ptr = ptr->next;
		}
		if (pos <= count && pos > 1) {
			ptr = head;
			for (int i = 0; i < pos - 1 - 1; i++) {
				ptr = ptr->next;
			}
			if (pos == 1) {
				free(head);
			}
			else {
				ptr->next = ptr->next->next;
			}
		}
	}
};

int main() {
	Node list;
	int k,choice,data;
	choice = 1;
	data = 0;
	int posdel = 0;
	int pos = 0;
	while (1) {
		cout << "1.insert\n2.display\n3.search a node by key\n4.insert at begin\n5.Insert after\n6.delete node" << endl;
		cin >> choice;
		switch (choice) {
		case 1:
			cout << "Input data for Node" << endl;
			cin >> data;
			list.insert(data);
			break;
		case 3:
			cout << "Enter key to be searched in list" << endl;
			cin >> k;
			list.NodeExists(k);
			break;
		case 2:
			list.display();
			break;
		case 4:
			cout << "Enter key" << endl;
			cin >> k;
			list.Insert_At_Begin(k);
			break;
		case 5:
			cout << "Enter key and position" << endl;
			cin >> k;
			cin >> pos;
			list.Insert_After(k,pos);
			break;
		case 6:
			cout << "position" << endl;
			cin >> posdel;
			list.Delete_Node(posdel);
			break;
		}
	}
}