function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Start merging from the end of nums1 to avoid overwriting existing elements
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
