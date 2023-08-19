class QueueX {

    int arr[];
    int front = 0;
    int end = 0;
    int size = 0;

    public QueueX() {
        this.arr = new int[10];
    }

    public QueueX(int size) {
        this.arr = new int[size];
    }

    public void add(int no) {
        if (size == arr.length) {
            int newArr[] = new int[arr.length * 2];
            int i = 0;
            for (i = 0; i < arr.length; i++) {
                newArr[i] = arr[front % arr.length];
                front++;
            }
            arr = newArr;
            front = 0;
            end = i;
        }

        arr[end++] = no;
        size++;
    }

    public void remove() {
        front++;
        size--;
    }

    public static void main(String[] args) {
        QueueX obj = new QueueX();
        obj.add(1);
        obj.add(2);
    }
}