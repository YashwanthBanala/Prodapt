class B{
	B(){
		System.out.println("Hi Constructor");
	}
	void B(int x,int y){
		System.out.println("HI method");
		int sum= x+y;
		System.out.println("Sum:"+sum);
	}
}

public class Demo1{
	public static void main(String args[]){
		System.out.println("Hi Demo");
		B b1=new B();b1.B(2,3);
		B b2=new B();
	}
}
