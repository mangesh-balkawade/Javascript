import java.util.*;

class Rev {
    public static void main(String args[]) {

        int arr[] = { 5, 4, 3, 2, 1 };
        // System.out.println(Arrays.toString(mergeSort(arr)));
        // System.out.println(subArray(arr));
        stringPowerSet("ABC", "");
    }

    static void stringPowerSet(String str, String temp) {
        if (str.length() == 0) {
            System.out.println(temp);
            return;
        }

        stringPowerSet(str.substring(1), temp);
        stringPowerSet(str.substring(1), temp + str.charAt(0));
    }

    static int[] mergeSort(int arr[]) {
        if (arr.length == 1) {
            return arr;
        }

        int[] left = Arrays.copyOfRange(arr, 0, arr.length / 2);
        int right[] = Arrays.copyOfRange(arr, arr.length / 2, arr.length);

        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }

    static int[] merge(int[] left, int[] right) {
        int mix[] = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                mix[k] = left[i];
                i++;
            } else {
                mix[k] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            mix[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            mix[k] = right[j];
            k++;
            j++;
        }
        return mix;
    }

    static List<ArrayList<Integer>> subArray(int arr[]) {
        List<ArrayList<Integer>> outer = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> li = new ArrayList<>();
        outer.add(li);
        for (int num : arr) {
            int size = outer.size();
            for (int i = 0; i < size; i++) {
                ArrayList<Integer> inner = new ArrayList<>();
                inner.addAll(outer.get(i));
                inner.add(num);
                outer.add(inner);
            }
        }
        return outer;

    }

}