result=0

# Test index.js
node -c ../index.js
(( result += $? ))

# Test lib files
for i in ../lib/*.js
do
	node -c $i
	(( result += $? ))
done

exit $result