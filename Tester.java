class Solution {
    public int finalDestination(int N, int M, int K, int[][] roads) {
        int[] distances = new int[N];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[0] = 0;

        int[] helps = new int[N];
        Arrays.fill(helps, Integer.MAX_VALUE);
        helps[0] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[]{0, 0}); // {distance, city}

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int currentDist = current[0];
            int currentCity = current[1];

            if (currentCity == N - 1) {
                return currentDist;
            }

            for (int[] road : roads) {
                int cityA = road[0];
                int cityB = road[1];
                int weight = road[2];

                if (cityA == currentCity) {
                    int cost;
                    if (weight % 2 == 0) {
                        cost = weight;
                    } else {
                        cost = (weight + 1) / 2;
                    }

                    if (cost < distances[cityB] && helps[cityA] < K) {
                        distances[cityB] = cost;
                        helps[cityB] = helps[cityA] + 1;
                        pq.offer(new int[]{cost, cityB});
                    }
                }
            }
        }

        return -1;
    }
}