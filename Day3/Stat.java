class A{
	static int a=100;
	static void display(){
		System.out.println("Ssupp");
	}
}
class Stat{
	static int b=200;
	public static void abc(){
		System.out.println("Same class");
	}

	public static void main(String args[]){
		System.out.println("Hi");
		A.display();
		System.out.println(A.a);
		System.out.println(b);
		abc();
	}

}