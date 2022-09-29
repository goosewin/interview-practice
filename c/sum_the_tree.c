#include <stddef.h>

struct node
{
	int value;
	struct node *left;
	struct node *right;
};

int sum_the_tree(struct node *root)
{
	return (root == NULL) ? 0 : root->value + sum_the_tree(root->right) + sum_the_tree(root->left);
}
